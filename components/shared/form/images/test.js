import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { API } from '../../api/Request';
import { compressImage, uniqid } from '../../helpers/functions.helpers';
import { http } from '../../http-common';
import UploadImg from '../../images/upload.jpg'
import ICEIcon from '../icons/ICEIcon';

const uploadProfileImage = async (data) => {
     try {
          return http({
               "Content-Type": "multipart/form-data"
          }).post(API.uploadProfile, data);
     } catch (error) {
          return { data: null, message: 'Server error', success: 'false' }
     }
}
/*  */

class FileUploader extends Component {
     constructor(props) {
          super(props);
          this.state = {
               image: '',
               name: '',
               canUpload: false,
               folder: this.props.folder,
               fileName: this.props.fileName,
               hidden: this.props.hidden
          }
          this.hiddenFileInput = React.createRef();
          this.handleClick = this.handleClick.bind(this);
          this.handleChange = this.handleChange.bind(this);
     }

     static getDerivedStateFromProps(props, state) {
          if (props?.image !== state?.image) {
               return { ...state, ...props };
          }

          if (props?.canUpload !== state?.canUpload) {
               return { ...state, ...props, image: props?.image, canUpload: props?.canUpload };
          }

          return { ...state, image: state?.image };
     }

     handleClick = event => {
          event.preventDefault();
          this.hiddenFileInput.current.click();
     }

     handleChange = async (event) => {
          const uploadingImage = toast.loading('Uploading...');
          const input = event.target;
          if (input.files && input.files[0]) {
               const formData = new FormData();
               const image = input.files[0];
               const compressedImage = await compressImage(image, 0.7)
               const imageName = uniqid();
               const maxAllowedSize = 10 * 1024 * 1024;

               console.log(image)
               console.log(compressedImage)

               if (input.files[0].size > maxAllowedSize) {
                    // Here you can ask your users to load correct file
                    toast.update(uploadingImage, { render: "Image size must not be larger than 10MB", type: toast.TYPE.WARNING, isLoading: false, autoClose: 3000 });
                    input.value = ''
               } else {
                    formData.append("file", compressedImage);
                    formData.append("folder", this.state.folder);
                    formData.append("name", imageName);
                    this.setState({
                         image: URL.createObjectURL(compressedImage), name: image.name
                    });
                    const { data: response } = await uploadProfileImage(formData);
                    console.log(response)
                    if (response?.success === 'true') {
                         const newImage = response.data;
                         this.setState({
                              image: newImage.url,
                              name: newImage.name
                         });
                         this.props.handleFile(newImage);
                         toast.update(uploadingImage, { render: "Uploaded successfully", type: "success", autoClose: 3000, isLoading: false });
                    } else {
                         toast.update(uploadingImage, { render: "Unable to upload file", type: "error", autoClose: 3000, isLoading: false });
                    }
               }
          } else {
               toast.update(uploadingImage, { render: "Unable to upload image", type: "error", autoClose: 3000, isLoading: false });
          }
     };

     render() {
          return (
               <div hidden={this.state.hidden} className={''}>
                    <div className="text-center position-relative" >
                         <div onClick={this.handleClick}
                              className={'text-white position-absolute file-uploader-overlay d-flex justify-content-center align-items-center  '
                                   + ((this.state.canUpload) ? 'edit' : 'd-none')}
                         >
                              <div>
                                   <ICEIcon iconType='image_upload' size={40} scolor='none' />
                                   <div className='text-white ts-sm'>CHOOSE</div>
                              </div>
                         </div>
                         {
                              <img src={this.state.image} className="images" alt="Editor File"
                              />
                         }
                    </div>
                    <input
                         type="file"
                         ref={this.hiddenFileInput}
                         onChange={this.handleChange}
                         style={{ display: 'none' }}

                    />
               </div>
          );
     }
};

FileUploader.defaultProps = {
     image: UploadImg,
     canUpload: false,
     folder: 'unknown',
     fileName: null,
     hidden: false
}

export default FileUploader;