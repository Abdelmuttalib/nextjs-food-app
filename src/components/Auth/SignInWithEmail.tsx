import React from "react";
import { useForm } from "react-hook-form";

type Props = { supabase };

const SignInWithEmail = ({ supabase }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSignInWithEmail = (data) => {
    signInWithEmail(data.email);
  };

  async function signInWithEmail(email: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
  }

  return (
    <div>
      Sign In With Email:{" "}
      <form onSubmit={handleSubmit(onSignInWithEmail)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <button type="submit">Sign In With Email</button>
        </div>
      </form>
    </div>
  );
};

export default SignInWithEmail;
