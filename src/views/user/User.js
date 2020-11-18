import React from "react";
import {
  UserProfileComponent,
  UserProfileField,
} from "../../components/users/UserProfileComponent";

export default (
  <UserProfileComponent title="John Doe" image={false}>
    <UserProfileField name="Dirección" value="Av. Siermpreviva 1234" />
  </UserProfileComponent>
);
