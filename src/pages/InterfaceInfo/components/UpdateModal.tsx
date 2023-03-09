import {
  ProColumns, ProFormInstance,
  ProTable,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';


export type Props = {
  values: API.InterfaceInfo;
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;

};

const UpdateModal: React.FC<Props> = (props) => {
  const { values, columns ,visible, onCancel, onSubmit} = props;

  const formRef = useRef<ProFormInstance>();

  //监听values的变化
  useEffect(()=>{
   if (formRef) {
     formRef.current?.setFieldsValue(values);
   }
  }, [values] )

  return (
    <Modal open={visible} onCancel={ ()=>onCancel?.() } footer={null}>
      <ProTable
        type={"form"}
        formRef={formRef}
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};

export default UpdateModal;
