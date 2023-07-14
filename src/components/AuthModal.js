import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { closeAuth, getUserInfo, setIsCodeSent, setPhone, showRegister } from "@/store/actions";
import { useDispatch, useSelector } from "react-redux";
import ReactInputMask from "react-input-mask";
import axios from "axios";
import { useRouter } from "next/router";

const AuthModal = () => {
  const { authModal } = useSelector((state) => state.modalsReducer);
  const { isSentCode } = useSelector((state) => state.authReducer);
  const { phone } = useSelector((state) => state.authReducer);
  const [incorPhoneNumber, setIncorPhoneNumber] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [incorConfCode, setIncorConfCode] = useState(false);
  const dispatch = useDispatch();
  const [code, setCode] = useState(null);
  const cart = useSelector((state) => state.cartReducer);
  const router = useRouter();

  const hideAuth = () => {
    dispatch(closeAuth());
    // dispatch(setPhone(""));
    dispatch(setIsCodeSent(false));
    setIncorPhoneNumber("");
    setIncorConfCode("");
  };

  const onSendCodeClick = async (e) => {
    const numericValue = phone.replace(/\D/g, "");
    e.preventDefault();
    let res;
    try {
      res = await axios.post("/api/send-code", { phone: numericValue });
      console.log("send-code", res);
    } catch (e) {
      console.log(e);
      return;
    }

    if (res.data.stateCode == 200) {
      dispatch(setIsCodeSent(true));
      setIncorPhoneNumber(false);
    }
    if (res.data.stateCode == 401) {
      dispatch(setIsCodeSent(false));
      setErrorMsg(res.data.message || "");
    }
    if (
      res.data.hasOwnProperty("isRegistered") &&
      res.data.isRegistered == false
    ) {
      dispatch(showRegister());
      hideAuth();
    }
  };

  const onLoginClick = async (e) => {
    e.preventDefault();
    const numericValue = phone.replace(/\D/g, "");
    let qData = { phone: numericValue, code: code };

    let res;
    try {
      res = await axios.post("/api/auth", qData);
    } catch (e) {
      console.log(e);
      return;
    }

    if (res.data.stateCode == 200) {
      setIncorConfCode(false);
      dispatch(getUserInfo(res.data.data || null));
      hideAuth();
    }

    if (res.data.stateCode == 401) {
      setErrorMsg("");
    }

    if (cart.length > 0) {
      hideAuth();
      return router.push("/cart");
    } else {
      hideAuth();
      return router.push("/profile");
    }
  };

  return (
    <Modal
      show={authModal}
      onHide={hideAuth}
      animation={false}
      className="modal fade p-0"
      id="authModal"
    >
      <Modal.Body className="modal-dialog modal-dialog-centered es-modal-center">
        <div className="modal-content es-modal-content">
          <div className="modal-header es-modal-header">
            <button
              className="btn btn-icon-modal close"
              type="button" 
              data-dismiss="modal" 
              aria-label="Close"
            >
              <span aria-hidden="true">
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
              </span>
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
              <div className="es-form-modal-wrp">
                <div className="form-group es-form-modal">
                  <ReactInputMask
                    value={phone}
                    className="form-control main-form-control "
                    placeholder="* Номер телефона"
                    mask="+\9\98 (99) 999 99 99"
                    maskChar={null}
                    onChange={(event) => {
                      dispatch(setPhone(event.target.value));
                    }}
                  />
                  {incorPhoneNumber && <div>Incorrect Phone Number</div>}
                </div>
                {isSentCode && (
                  <div className="form-group es-form-modal">
                    <input
                      type="text"
                      className="form-control main-form-control "
                      id="InputCodeModal"
                      placeholder="* Введите код"
                      onChange={(event) => setCode(event.target.value)}
                    />
                    {incorConfCode && <div>Incorrect confirmation code</div>}
                  </div>
                )}
              </div>
              {!isSentCode && (
                <button onClick={onSendCodeClick} className="btn btn-cart-modal" href="#">
                  Далее
                </button>
              )}
              {isSentCode && (
                <button onClick={onLoginClick} className="btn btn-cart-modal" href="#">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
