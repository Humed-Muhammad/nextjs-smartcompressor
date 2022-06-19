import { BeakerIcon } from '@heroicons/react/outline';
import { Progress } from 'antd';

import { useFileSliceSlice } from '@/components/FileDrop/slice';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import { CompressedResultTypes } from '@/utils/types';

import { DeleteIcon, DownloadIcon } from '../Icons';
import { ImagePreview } from '../Popover';

interface Props {
  item: CompressedResultTypes;
  index: number;
}

export default function ListItem({ item, index }: Props) {
  const dispatch = useAppDispatch();
  const { actions } = useFileSliceSlice();
  return (
    <article className="my-1 flex w-full items-center justify-around space-x-6 bg-white p-3 font-sans shadow-md">
      <ImagePreview image={item.compressedImage}>
        <img
          src={
            item.compressedImage &&
            window.URL.createObjectURL(item.compressedImage)
          }
          alt=""
          width="60"
          height="60"
          className="h-12 w-12 flex-none rounded-full bg-slate-100"
        />
      </ImagePreview>
      <div className="relative flex w-full min-w-0 flex-wrap items-center justify-around">
        <h2 className="hidden overflow-auto truncate pr-20 font-semibold text-slate-900 md:inline-block ">
          {item.imageName.length > 15
            ? item.imageName.substring(0, item.imageName.indexOf('.'))
            : item.imageName}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm font-medium leading-6">
          <div className="mx-2">
            <dt className="sr-only">Orifinal size</dt>
            <dd> {Math.round(item.originalSize)} kb</dd>
          </div>
          <BeakerIcon width={20} className="text-lg text-yellow-500 " />
          <div className="ml-2">
            <dt className="sr-only">Compressed</dt>
            <dd>{Math.round(item.compressedSize)} kb</dd>
          </div>

          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
            </dd>
          </div>
        </dl>
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          type="circle"
          percent={Math.round(
            ((item.originalSize - item.compressedSize) / item.originalSize) *
              100
          )}
          strokeWidth={7}
          width={45}
        />
        <div className="flex items-center justify-center  space-x-1 divide-x-2 ">
          <a
            href={item && window.URL.createObjectURL(item.compressedImage)}
            download={item.imageName}
          >
            <DownloadIcon className="m-2" />
          </a>

          <DeleteIcon
            className="m-2 cursor-pointer px-2"
            command={() => dispatch(actions.deleteImage(index))}
          />
        </div>
      </div>
    </article>
  );
}
