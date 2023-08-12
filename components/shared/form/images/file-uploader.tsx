'use client';
import React, { useState, useRef } from 'react';
import Compressor from 'compressorjs';
import { generateUniqueID } from '@/utils/function-helpers';
import BlurImage from '../../ui/blur-image';
import { imageAddIcon, imageProfileIcon } from '@/utils/icons';

interface FileUploaderProps {
	image?: string;
	text?: string;
	folder?: string;
	fileName?: string | null;
	type?: 'circle' | 'portrait' | 'landscape';
	handleFile: (newImage: any) => void;
	className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = (props) => {
	const [image, setImage] = useState<string>(props.image || '');
	const [name, setName] = useState<string>('');
	const [folder] = useState<string>(props.folder || 'unknown');
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	const uploadProfileImage = async (data: FormData) => {
		try {
			const response = await fetch(
				'https://developer.isce.app/v1/spaces/api/uploadFile',
				{
					method: 'POST',
					body: data,
				}
			);
			return await response.json();
		} catch (error) {
			return { data: null, message: 'Server error', success: 'false' };
		}
	};

	const handleClick = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click();
		}
	};

	const handleChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target;
		if (input.files && input.files[0]) {
			const inputImage = input.files[0];

			new Compressor(inputImage, {
				quality: 1,
				success: async (compressedImage) => {
					const imageName = `c4b-${generateUniqueID()}-${folder}`;
					const maxAllowedSize = 50 * 1024 * 1024;

					if (compressedImage.size > maxAllowedSize) {
						console.log(
							'Image size must not be larger than 10MB'
						);
						input.value = '';
					} else {
						const formData = new FormData();
						formData.append('file', compressedImage);
						formData.append('folder', folder);
						formData.append('name', imageName);
						setImage(URL.createObjectURL(compressedImage));
						setName(inputImage.name);

						const response = await uploadProfileImage(
							formData
						);

						if (response?.success === 'true') {
							const newImage = response.data;
							setImage(newImage.url);
							setName(newImage.name);
							props.handleFile(newImage);
							console.log('Uploaded successfully');
						} else {
							console.log('Unable to upload file');
						}
					}
				},
				error: (err) => {
					console.log('Image compression error:', err);
				},
			});
		} else {
			console.log('Unable to upload image');
		}
	};
	const shapes =
		props.type === 'circle'
			? 'h-[120px] w-[120px] bg-gradient-to-b rounded-full p-[3px] from-black/0 to-black/100 p-[2px]'
			: props.type === 'portrait'
			? 'w-60 aspect-[2/3] rounded-2xl bg-gray-100 flex-col'
			: 'aspect-[2/1] bg-gray-100 rounded-2xl';
	const container = props.type === 'circle' ? 'h-[120px] w-[120px]' : '';
	const placeholder =
		props.type === 'circle'
			? 'rounded-full bg-slate-100 text-black'
			: 'flex-col';

	return (
		<>
			<div
				className={`${container} ${props.className} relative cursor-pointer`}
				onClick={handleClick}
			>
				<div
					className={`${shapes} flex items-center justify-center`}
				>
					{image && image ? (
						<BlurImage
							src={image as string}
							height={600}
							width={400}
							alt='avatar'
							className={`w-full h-full object-cover object-center overflow-hidden bg-white ${
								props.type === 'circle'
									? 'rounded-full'
									: 'rounded-2xl'
							}`}
						/>
					) : (
						<div
							className={`w-full h-full flex items-center justify-center ${placeholder}`}
						>
							{props.type === 'circle'
								? imageProfileIcon
								: imageAddIcon}
							{props.type !== 'circle' && (
								<p className='text-xs text-center text-black'>
									{props.text}
								</p>
							)}
						</div>
					)}
				</div>
			</div>
			<input
				ref={hiddenFileInput}
				type='file'
				onChange={handleChange}
				accept='image/*'
				className='hidden'
			/>
		</>
	);
};

export default FileUploader;
