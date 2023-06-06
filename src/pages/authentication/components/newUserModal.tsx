import BasicModal from "~/common/BassicModal";
import {
    Box,
    FormControlLabel,
    TextField,
    Checkbox,
    FormLabel,
    RadioGroup,
    Radio,
    FormControl,
    FormHelperText,
} from "@mui/material";
import authStyles from "../styles";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { FieldError } from "react-hook-form";
// import { FormEvent, FormEventHandler } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userProps } from "~pages/authentication";
interface NewUserModalProps {
    open: boolean;
    onClose: () => void;
    addUser: (data: userProps) => void;
}

export interface DataForm {
    userId: string;
    email: string;
    phoneNumber: number | string;
    terms: boolean;
    gender: "male" | "female";
}

const NewUserModal = ({ open, onClose, addUser }: NewUserModalProps) => {
    const { inputFields } = authStyles;
    const initialValues: userProps = {
        userId: "",
        email: "",
        phoneNumber: "",
        terms: false,
        gender: "female",
    };
    const phoneRegex =
        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .required("User ID is required")
            .min(6, "User ID must be at least 6 characters"),
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid."),
        phoneNumber: Yup.string().matches(
            phoneRegex,
            "Phone number is not valid."
        ),
        terms: Yup.string().oneOf(["true"], "Accept terms and conditions"),
    });

    const handleSubmit = (data: userProps, props: any) => {
        addUser(data);
        onClose();
        // props.resetForm();
    };

    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New User"
            subTitle="Fill out inputs and hit 'submit' button."
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}

            // validate={() => console.log("validate")}
            // onSubmit={handleSubmit}
        >
            <Box sx={inputFields}>
                <Field
                    as={TextField}
                    fullWidth
                    name="userId"
                    label="User ID"
                    required
                    helperText={<ErrorMessage name="userId" />}
                />
                <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="E-mail"
                    required
                    // error={true}
                    helperText={<ErrorMessage name="email" />}
                />
                <Field
                    as={TextField}
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    // error={true}
                    helperText={<ErrorMessage name="phoneNumber" />}
                />
                <FormControl component={"fieldset"}>
                    <FormLabel component={"legend"}>Gender</FormLabel>
                    <Field
                        as={RadioGroup}
                        aria-label="gender"
                        name="gender"
                        styles={{ display: "initial" }}
                        defaultValue="female"
                        row
                    >
                        <FormControlLabel
                            value={"female"}
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            value={"male"}
                            control={<Radio />}
                            label="Male"
                        />
                    </Field>
                </FormControl>
                <FormControlLabel
                    control={<Field as={Checkbox} name={"terms"} />}
                    label="I accept the term and conditions"
                />
                <FormHelperText>
                    <ErrorMessage name="terms" />
                </FormHelperText>
            </Box>
        </BasicModal>
    );
};

export default NewUserModal;
