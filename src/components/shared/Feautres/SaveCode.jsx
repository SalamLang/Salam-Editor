import { useEffect, useState } from "react";
import Modal from "../Modal.jsx";
import Form from "../../auth/Form.jsx";
import Label from "../../auth/Label.jsx";
import Input from "../../auth/Input.jsx";
import Button from "../../auth/Button.jsx";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UpdateCodeService from "../../../services/UpdateCodeService.js";
import SaveCodeService from "../../../services/SaveCodeService.js";

// eslint-disable-next-line react/prop-types
const SaveCode = ({ login, show = false, callback }) => {
  const [saveModal, setSaveModal] = useState(false);
  const [formData, setFormData] = useState({
    title: localStorage?.getItem("title") ?? null,
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
  }, [login, show]);

  const saveCode = (e) => {
    e.preventDefault();

    if (login === false) {
      toast.error("باید وارد حسابت بشی!", {
        position: "bottom-center",
      });

      return false;
    }
    setClicked(true);

    validation
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});

        if (localStorage?.getItem("is_me") === "true") {
          let result = await UpdateCodeService(
            params?.id,
            localStorage?.getItem("code"),
          );
          if (result?.success === true) {
            toast.success("با موفقیت ذخیره شد.", {
              position: "bottom-center",
            });
            setSaveModal(false);
          }
        } else {
          let result = await SaveCodeService(
            formData.title,
            localStorage?.getItem("code"),
          );
          if (result?.success === true) {
            toast.success("با موفقیت ذخیره شد.", {
              position: "bottom-center",
            });
            setSaveModal(false);
            navigate("/" + result.data.id);
          }
        }
        callback();
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
          {localStorage?.getItem("is_me") !== "true" && (
            <>
              <Label form={"title"} required={true} error={errors.title}>
                عنوان کد:
                <Input
                  className={"mt-1"}
                  name={"title"}
                  onInput={handleChange}
                  autoFocus={true}
                />
              </Label>
            </>
          )}
          <Button disabled={clicked}>ذخیره کد</Button>
        </Form>
      </Modal>
    </>
  );
};

export default SaveCode;
