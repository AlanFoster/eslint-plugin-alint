export default function(expectedErrorMessage) {
  return function (code) {
    return {
      code: code,
      errors: [{message: expectedErrorMessage}]
    };
  };
}
