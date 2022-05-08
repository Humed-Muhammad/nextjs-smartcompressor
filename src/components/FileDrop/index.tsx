import { AdjustmentsIcon } from '@heroicons/react/outline';
import { message, Popover, Slider, Spin, UploadProps } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { useEffect, useState } from 'react';

import FileDropzone from '@/components/base/fileDropzone';
import { handleImageCompression } from '@/utils/functions/compressor';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/reduxHooks';
import { CompressedResultTypes } from '@/utils/types';

import { Container } from '../base';
import { CompressedList } from '../CompressedListView';
import { useFileSliceSlice } from './slice';
import { selectCompressedImages } from './slice/selectors';

export const FileDrop = () => {
  const [fileListData, setFileListData] = useState<Array<UploadFile>>([]);
  const [startCompression, setStartCompression] = useState<boolean>(false);
  const [compressionRate, setCompressionRate] = useState<number>(70);
  const dispatch = useAppDispatch();
  const compressedImages = useAppSelector(selectCompressedImages as any);
  const showLoading = useAppSelector((state) => state?.fileSlice.showProgress);
  const { actions } = useFileSliceSlice();

  const handleCompresssion = async (files: UploadFile[], name?: string) => {
    try {
      if (files && files.length) {
        dispatch(actions.setProgressOn());
        const result: Array<CompressedResultTypes | undefined> = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
          // eslint-disable-next-line no-await-in-loop
          const res = await handleImageCompression(file, compressionRate);
          result.push(res);
        }

        dispatch(actions.getImages(result));
      } else {
        message.warning(`No image to compress please upload and try again!`);
      }
    } catch (error) {
      message.error(`${name} Image compression failed.`);
    }
  };

  useEffect(() => {
    if (startCompression) {
      setTimeout(
        () =>
          handleCompresssion(fileListData).then(() => {
            setFileListData([]);
            setStartCompression(false);
            message.success(`Images compressed successfully.`);
          }),
        10
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCompression]);

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    accept: 'image/*',
    onChange(info) {
      setFileListData(info.fileList);
      setStartCompression(true);
    },
    fileList: fileListData,
  };
  return (
    <div className="flex w-full flex-col items-center justify-start bg-slate-100 ">
      <Container className="mt-5">
        <Popover
          content={
            <div className="w-11/12 md:w-96 ">
              <h2 className="font-semibold text-indigo-500 ">
                Adjust compression rate
              </h2>
              <h4 className="font-normal text-gray-400">Best is 65 - 100</h4>
              <Slider
                onAfterChange={(value) => {
                  setCompressionRate(value);
                }}
                defaultValue={70}
              />
            </div>
          }
          trigger="click"
        >
          <AdjustmentsIcon className="w-8 cursor-pointer text-indigo-400" />
        </Popover>
      </Container>
      <FileDropzone props={props} />
      <div className="my-4 flex  h-auto w-full flex-wrap items-center justify-center bg-slate-100">
        <CompressedList
          item={compressedImages as CompressedResultTypes[] | undefined}
        />
        {showLoading && (
          <div className="mt-5 flex w-full items-center justify-center">
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
};
