import { useEffect, useState } from "react";
import Modal from "../Modal.jsx";
import Form from "../../auth/Form.jsx";
import Label from "../../auth/Label.jsx";
import Input from "../../auth/Input.jsx";
import Button from "../../auth/Button.jsx";
import * as Yup from "yup";

// eslint-disable-next-line react/prop-types
const SaveCode = ({ login, show = false, callback }) => {
  const [saveModal, setSaveModal] = useState(false);
  const [saveData, setSaveData] = useState({
    title: null,
  });
  const [clicked, setClicked] = useState(false);
  const [errors, setErrors] = useState({});

  const validation = Yup.object({
    title: Yup.string().min(5).required("وارد کردن عنوان الزامی است"),
  });

  const handleChange = (e) => {
    setSaveData({
      ...saveData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const saveCode = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setSaveModal(show);
  }, [show]);

  return (
    <>
      {login === true && (
        <Modal
          show={saveModal}
          className={"w-[400px] h-auto pb-4 p-3"}
          callback={() => {
            setSaveModal(false);
            callback();
          }}
        >
          <h1 className={"text-[23px] text-center font-bold"}>ذخیره کد</h1>
          <Form onSubmit={saveCode}>
            <Label form={"title"} required={true}>
              عنوان کد:
              <Input
                className={"mt-1"}
                name={"title"}
                onInput={handleChange}
                autoFocus={true}
              />
            </Label>
            <Button disabled={clicked}>ذخیره کد</Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default SaveCode;
