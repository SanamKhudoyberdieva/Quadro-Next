import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { closeRegister, setIsCodeSent, getUserInfo, setPhone } from "@/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ReactInputMask from "react-input-mask";
import Swal from "sweetalert2";
import axios from "axios";



const RegisterModal = () => {
    const { registerModal } = useSelector((state) => state.modalsReducer);
    const [code, setCode] = useState(null);
    const [incorPhoneNumber, setIncorPhoneNumber] = useState(false);
    const [incorConfCode, setIncorConfCode] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [inputFullName, setInputFullName] = useState("");
    const [inputBirthdate, setInputBirthdate] = useState("");
    const [gender, setGender] = useState(null);
    const { phone } = useSelector((state) => state.authReducer);
    const router = useRouter();
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();


    const hideRegister = () => {
        dispatch(closeRegister)
        dispatch(setPhone(""));
        dispatch(setIsCodeSent(false));
        setCode("");
        setErrorMsg("");
        setIncorPhoneNumber("");
        setIncorConfCode("");
        setGender(null);
        setInputBirthdate("");
        setInputFullName("");
    };

    const onRegisterClick = async (e) => {
        e.preventDefault();
        const numericValue = phone.replace(/\D/g, "");
        const birthdate = inputBirthdate.replace(/\D/g, "-");
        if (
          !inputFullName.length ||
          !numericValue.length ||
          !birthdate ||
          !gender
        ) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Пожалуйста заполните все поля!",
            timer: 1000,
            showConfirmButton: false,
          });
          return;
        }
    
        let res;
        try {
          res = await axios.post("/api/register", {
            name: inputFullName,
            birthdate: birthdate,
            gender: gender,
            phone: numericValue,
            code: code,
          });
        } catch (e) {
          console.log(e);
          return;
        }
    
        if (res.data.stateCode == 200 && typeof window === true) {
          setIncorConfCode(false);
          dispatch(getUserInfo(res.data.data || null));
          hideRegister();
        }
    
        if (res.data.stateCode == 401) {
          setErrorMsg(res.data.message || "");
        }
    
        if (cart.length > 0) {
          hideRegister();
          return router.push("/cart");
        } else {
          hideRegister();
          return router.push("/profile");
        }
      };
    
      const selectGender = (event) => {
        setGender(event.target.value);
      };

    return (
        <Modal
        show={registerModal}
        onHide={hideRegister}
        animation={false}
        className="modal fade p-0"
        id="registerModal"
        >
        <Modal.Body className="modal-dialog modal-dialog-centered es-modal-center">
            <div className="modal-content es-modal-content">
            <div className="modal-header es-modal-header">
                <button
                className="btn btn-icon-modal"
                type="button"
                data-toggle="modal"
                data-target="#registerModal"
                >
                <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_103_5511)">
                    <rect
                        x="15"
                        y="0.707107"
                        width="19"
                        height="19"
                        transform="rotate(45 15 0.707107)"
                        stroke="#3B1E1C"
                    />
                    <rect
                        x="15"
                        y="28"
                        width="20"
                        height="20"
                        transform="rotate(45 15 28)"
                        fill="#3B1E1C"
                    />
                    <path
                        d="M12 17.1426L18 11.1426"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18 17.1426L12 11.1426"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_103_5511">
                        <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(15) rotate(45)"
                        />
                    </clipPath>
                    </defs>
                </svg>
                </button>
            </div>
            <div className="modal-body es-modal-body">
                <div className="logo-modal-wrapper">
                <Image
                    className="es-order-complete-logo"
                    src={require("../assets/img/ic_logo.svg")}
                    alt="logo"
                />
                </div>
               <form>
               <p className="text-danger d-block">{errorMsg}</p>
               <div className="gender-wrp">
                <label className="control-label es-control-label">
                    Выберите пол
                </label>
                <input type="hidden" name="OrderForm[gender]" value="" />
                <div
                    id="orderform-payment"
                    className="es-pv-checklist"
                    role="radiogroup"
                >
                    <label className="radio-label">
                    <input
                        type="radio"
                        name="gender"
                        value="1"
                        checked={gender === "1"}
                        onChange={selectGender}
                        required
                    />{" "}
                    Мужской
                    </label>
                    <label className="radio-label">
                    <input
                        type="radio"
                        name="gender"
                        value="0"
                        checked={gender === "0"}
                        onChange={selectGender}
                        required
                    />{" "}
                    Женский
                    </label>
                </div>
                </div>
                <div className="es-form-modal-wrp">
                <div className="form-group es-form-modal">
                    <input
                    onChange={(e) => setInputFullName(e.target.value)}
                    type="text"
                    className="form-control main-form-control "
                    id="InputNameModal"
                    placeholder="* Ваше имя"
                    />
                </div>
                <div className="form-group es-form-modal">
                <ReactInputMask
                    mask="9999/99/99"
                    value={inputBirthdate}
                    className="form-control main-form-control"
                    onChange={(e) => setInputBirthdate(e.target.value)}
                    placeholder="* Дата рождения"
                    required
                />
                </div>
                <div className="form-group es-form-modal">
                <ReactInputMask
                    defaultValue={phone}
                    placeholder="* Номер телефона"
                    mask="+\9\98 (99) 999 99 99"
                    maskChar={null}
                    disabled
                    onChange={(event) => {
                        dispatch(setPhone(event.target.value));
                    }}
                    className="form-control main-form-control "
                />
                {incorPhoneNumber && <div>Incorrect Phone Number</div>}
                </div>
                <div className="form-group es-form-modal">
                    <input
                    type="password"
                    className="form-control main-form-control "
                    id="InputCodeModal"
                    placeholder="* Введите код"
                    onChange={(e) => setCode(e.target.value)}
                    />
                    {incorConfCode && <div>Incorrect confirmation code</div>}
                </div>
                </div>
                <button  onClick={onRegisterClick} className="btn btn-cart-modal" href="#">
                Далее
                </button>
            </form>
            </div>
            </div>
        </Modal.Body>
        </Modal>
    );
};

export default RegisterModal;
