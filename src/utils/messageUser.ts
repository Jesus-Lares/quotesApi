type typesObjectString = {
  [key: string]: string;
};

const MessagePostUser: typesObjectString = {
  CREATE_SUCCESS: "Usuario creado correctamente.",
};

const ErrorMessagePostUser: typesObjectString = {
  ER_DUP_ENTRY: "El email ya esta regitrado con una cuenta.",
  DEFAULT: "Error al realizar la petición. Comprueba que tienes corretamente todo",
};

export {
  ErrorMessagePostUser,
  MessagePostUser,
};
