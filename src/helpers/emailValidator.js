export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email.trim()) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}
