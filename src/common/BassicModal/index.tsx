import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyles } from "./styles";
// import { Input } from "@mui/material";
import CommonBtn from "~/common/Button";
// import { DataForm } from "~pages/authentication/components/newUserModal";
import { Formik, Field, Form, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";
import { userProps } from "~pages/authentication";

interface DataForm {
    userId: string;
    email: string;
    phoneNumber: string | number;
    terms: boolean;
    gender: "male" | "female";
}

interface BasicModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    title: string | number;
    subTitle?: string | number;
    initialValues: userProps;
    validationSchema?: Yup.ObjectSchema<{
        userId: string;
        email: string;
        phoneNumber?: string;
    }>;
    handleSubmit: (data: userProps, props: any) => void;
}

export default function BasicModal({
    children,
    open,
    onClose,
    title,
    subTitle,
    initialValues,
    validationSchema,
    handleSubmit,
}: // onSubmit,
BasicModalProps) {
    return (
        <div>
            <Modal open={open} onClose={onClose}>
                <Box sx={modalStyles.wrapper}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {subTitle}
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {(props) => (
                            <Form>
                                {children}
                                <Box sx={modalStyles.buttons}>
                                    <CommonBtn
                                        type="submit"
                                        variant="contained"
                                    >
                                        Submit
                                    </CommonBtn>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}
