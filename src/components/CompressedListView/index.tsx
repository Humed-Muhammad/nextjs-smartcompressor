import { Popconfirm } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { List, ListItem } from '@/components/base';
import { zipper } from '@/utils/functions/zipper';
import { CompressedResultTypes } from '@/utils/types';

import { Container } from '../base/container';
import { useFileSliceSlice } from '../FileDrop/slice';

interface Props {
  item: CompressedResultTypes[] | undefined;
}

export const CompressedList = ({ item }: Props) => {
  const [allImages, setAllImages] = useState();
  const dispatch = useDispatch();

  const { actions } = useFileSliceSlice();

  const getZippedFile = useCallback(() => {
    if (item && item.length >= 2) {
      zipper(item).then((data) => {
        setAllImages(data);
      });
    }
  }, [item]);

  useEffect(() => {
    getZippedFile();
  }, [getZippedFile]);

  return (
    <List>
      {item && item?.length >= 2 && (
        <Container className="my-2 items-center justify-end">
          <h4 className=" cursor-pointer border-b-2 text-blue-500 hover:border-b-2 hover:border-b-blue-400">
            <a href={allImages} download>
              Download all
            </a>
          </h4>
          <Popconfirm
            title="Are you sure to delete all images?"
            onConfirm={() => dispatch(actions.deleteAllImages())}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              className: 'text-blue-500 ',
            }}
            placement="topRight"
          >
            <h4 className=" ml-5 cursor-pointer border-b-2 text-red-500 hover:border-b-2 hover:border-b-orange-400">
              Delete all
            </h4>
          </Popconfirm>
        </Container>
      )}
      {item?.map((item, index) => (
        <ListItem index={index} key={uuid()} item={item} />
      ))}
    </List>
  );
};
