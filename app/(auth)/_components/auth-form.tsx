"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Globe2 } from "lucide-react";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // TODO: axios SignIn
      axios.post("/api/register", data);
    }

    if (variant === "LOGIN") {
      // TODO: NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // TODO: NextAuth SocialSignIn
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl border p-4 sm:max-w-xs">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-4"
      >
        {/* # */}
        {variant === "REGISTER" && (
          <Input
            id="name"
            type="text"
            {...register("name")}
            required
            disabled={isLoading}
            placeholder="Name"
          />
        )}

        <Input
          id="email"
          type="email"
          {...register("email")}
          required
          disabled={isLoading}
          placeholder="Email"
        />

        <Input
          id="password"
          type="password"
          {...register("password")}
          required
          disabled={isLoading}
          placeholder="Password"
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {variant === "LOGIN" ? "Sign In" : "Register"}
        </Button>

        <span className="mt-4 text-xs text-muted-foreground">
          or login with
        </span>

        <div className="grid w-full grid-cols-2 gap-2">
          <Button disabled={isLoading} variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>

          <Button disabled={isLoading} variant="outline">
            <Globe2 className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </form>

      <div className="mt-4 flex justify-center gap-2">
        <span className="text-xs text-muted-foreground">
          {variant === "LOGIN"
            ? "New to Messenger?"
            : "Alredy have an account?"}
        </span>

        <Button
          onClick={toggleVariant}
          variant="link"
          className="h-max p-0 text-xs underline"
        >
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </Button>
      </div>

      <span className="mt-4 text-xs text-muted-foreground">@shendrong</span>
    </div>
  );
};

export default AuthForm;
