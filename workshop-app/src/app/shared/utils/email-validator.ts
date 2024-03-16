import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  //
  const domainsString = domains.join('|');
  const regEx = new RegExp(`^.{6,}@gmail\.(${domainsString})$`);
  return (control) => {
    const isValidEmail = regEx.test(control.value);
    return isValidEmail ? null : { emailValidator: true };
  };
}
