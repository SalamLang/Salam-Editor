import { useEffect, useState } from "react";
import Modal from "../Modal.jsx";
import Form from "../../auth/Form.jsx";
import Label from "../../auth/Label.jsx";
import Input from "../../auth/Input.jsx";
import Button from "../../auth/Button.jsx";
import * as Yup from "yup";
import { toast } from "react-toastify";
import SaveCodeService from "../../../services/SaveCodeService.js";
import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SaveCode = ({ login, show = false, callback }) => {
  const [saveModal, setSaveModal] = useState(false);
  const [formData, setFormData] = useState({
    title: null,
  });
  const [clicked, setClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  const validation = Yup.object({
    title: Yup.string().required("وارد کردن عنوان الزامی است"),
  });

  useEffect(() => {
    setSaveModal(show);
  }, [show]);

  const saveCode = (e) => {
    e.preventDefault();
    setClicked(true);

    validation
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});
        let result = await SaveCodeService(
          formData.title,
          localStorage?.getItem("code"),
        );
        if (result?.success === true) {
          toast.success("با موفقیت ذخیره شد.");
          navigate("/" + result.data.id);
        }
        setClicked(false);
      })
      .catch((err) => {
        const newErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
        setClicked(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

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
            <Label form={"title"} required={true} error={errors.title}>
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
