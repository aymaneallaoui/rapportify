"use client";

import * as z from "zod";

import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
} from "@nextui-org/react";

import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "../layouts/ThemeSwitcher";

import { signIn } from "next-auth/react";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginData = {
  email: string;
  password: string;
};

export default function SignUpForm() {
  const [selected, setSelected] = React.useState("login");
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisibileLogin, setIsVisibleLogin] = React.useState(false);
  const [Error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const SignUpFormSchema: z.ZodType<FormData> = z
    .object({
      username: z.string().min(6, "Username should be +5 characters").max(100),
      email: z.string().min(3, "Email is required").email("Invalid email"),
      password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have than 8 characters"),
      confirmPassword: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password do not match",
    });

  const LoginFormSchema = z.object({
    email: z.string().min(3, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
  });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityLogin = () => setIsVisibleLogin(!isVisibileLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignUpFormSchema),
    mode: "onBlur",
  });

  const SubmitData = (data: FormData | LoginData) => {
    console.log(data);
  };

  const {
    register: LoginRegister,
    handleSubmit: LoginSubmit,
    formState: { errors: LoginError },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
  });

  let message = "test";

  const router = useRouter();

  const onSubmitSignUp = async (values: z.infer<typeof SignUpFormSchema>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log(values.email);
    setLoading(true);

    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    console.log(JSON.stringify(data));

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console;
    console.log(response);

    if (response.ok) {
      setSuccess(false);
      setLoading(false);

      router.push("/dashboard");
    } else {
      setLoading(false);
      const errorMessage = await response.json();
      message = errorMessage.message;
      setError(message);
      setSuccess(true);
    }
  };

  const handleClose = () => {
    setSuccess(() => false);
    console.log("test");
  };

  const onSubmitLogin = async (values: z.infer<typeof LoginFormSchema>) => {
    setLoading(true);
    const SignInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (SignInData?.error) {
      setError("invalid password or email try again");
      setLoading(false);
      setSuccess(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col w-full bg-background overflow-hidden justify-center items-center  scrollbar-hide ">
      <Card className="max-w-full w-[340px] h-full   mt-28 ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={() => setSelected}
            color="primary"
          >
            <Tab key="login" title="Login">
              <form
                className="flex flex-col gap-4"
                onSubmit={LoginSubmit(onSubmitLogin)}
              >
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  {...LoginRegister("email")}
                  validationState={LoginError.email ? "invalid" : "valid"}
                  errorMessage={LoginError.email?.message}
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibilityLogin}
                    >
                      {isVisibileLogin ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisibileLogin ? "text" : "password"}
                  className="max-w-xs"
                  isRequired
                  {...LoginRegister("password")}
                  validationState={LoginError.password ? "invalid" : "valid"}
                  errorMessage={LoginError.password?.message}
                />
                {success && (
                  <Chip
                    variant="shadow"
                    color="danger"
                    className=" text-center"
                    onClose={() => handleClose()}
                  >
                    {Error}
                  </Chip>
                )}
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link
                    size="sm"
                    onPress={() => setSelected("sign-up")}
                    isBlock
                    showAnchorIcon
                    className=" hover:cursor-pointer"
                  >
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    isLoading={loading}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form
                className="flex flex-col gap-4 h-full"
                onSubmit={handleSubmit(onSubmitSignUp)}
              >
                <Input
                  isRequired
                  label="Username"
                  placeholder="Enter your name"
                  type="text"
                  {...register("username")}
                  validationState={errors.username ? "invalid" : "valid"}
                  errorMessage={errors.username?.message}
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email")}
                  validationState={errors.email ? "invalid" : "valid"}
                  errorMessage={errors.email?.message}
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                  isRequired
                  {...register("password")}
                  validationState={errors.password ? "invalid" : "valid"}
                  errorMessage={errors.password?.message}
                />
                <Input
                  label="Confirm your password"
                  placeholder="Retype your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                  isRequired
                  {...register("confirmPassword")}
                  validationState={errors.confirmPassword ? "invalid" : "valid"}
                  errorMessage={errors.confirmPassword?.message}
                />

                {success && (
                  <Chip
                    variant="shadow"
                    color="danger"
                    className=" text-center"
                    onClose={() => handleClose()}
                  >
                    {Error}
                  </Chip>
                )}
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link
                    size="sm"
                    onPress={() => setSelected("login")}
                    isBlock
                    showAnchorIcon
                    className=" hover:cursor-pointer"
                  >
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    isLoading={loading}
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
