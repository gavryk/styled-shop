import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { useUser } from "@auth0/nextjs-auth0";

const User = () => {
  const route = useRouter();
  const {user} = useUser();
  console.log(user);
  if (user) {
    return (
      <div className={styles.profile}>
        <img src={user.picture} alt={user.name} />
        <span>{user.name}</span>
      </div>
    );
  }
  return (
    <div
      className={styles.profile}
      onClick={() => route.push("/api/auth/login")}
    >
      <FaUserCircle />
      <span>Profile</span>
    </div>
  );
};

export default User;
