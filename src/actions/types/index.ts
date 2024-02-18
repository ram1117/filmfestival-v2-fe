export interface SignUpFormState {
  errors: {
    fullname?: string[];
    password1?: string[];
    password2?: string[];
    email?: string[];
    _form?: string[];
  };
}

export interface EventBookFormState {
  errors: string[];
}
