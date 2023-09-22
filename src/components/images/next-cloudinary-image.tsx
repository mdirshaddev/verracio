'use client';

// next cloudinary image typing
import type { NextCloudinaryImgType } from 'src/types/next-cloudinary';

// react
import { useState } from 'react';

// next image
import Image from 'next/image';

import Lightbox from 'react-18-image-lightbox';

// build cloudinary url
import { buildUrl } from 'cloudinary-build-url';

// shared lib util
import { cn } from 'shared-lib/utils';

/* The code is defining a React functional component called `NextCloudinaryImg`. It takes in a set of
props of type `NextCloudinaryImgType`. */
export const NextCloudinaryImg: React.FC<NextCloudinaryImgType> = props => {
  const {
    publicId,
    height,
    width,
    alt,
    title,
    className,
    preview = true,
    noStyle = false,
    mdx = false,
    style,
    aspect,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: 'mdirshaddev'
    },
    transformations: {
      effect: {
        name: 'blur:1000'
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined
    }
  });
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'mdirshaddev'
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined
    }
  });

  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  return (
    <figure
      className={cn(className, {
        'overflow-hidden rounded shadow dark:shadow-none': !noStyle,
        'mx-auto w-full': mdx && +width <= 800
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style
      }}
      {...rest}>
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
          cursor: preview ? 'zoom-in' : 'default'
        }}
        className='img-blur'
        onClick={preview ? () => setIsOpen(true) : undefined}>
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className='absolute left-0 top-0'>
          <Image
            width={
              resizedToMaxWidth ? Math.min(+width, RESIZE_MAX_WIDTH) : width
            }
            height={
              resizedToMaxWidth ? (RESIZE_MAX_WIDTH * +height) / +width : height
            }
            src={url}
            alt={alt}
            title={title || alt}
          />
        </div>
      </div>
      {isOpen && (
        <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
      )}
    </figure>
  );
};
