## RUNNING:
  - In terminal run: yarn 
  - And yarn dev

# Description

It is considered a valid password when it has the following definitions:

- Nine or more characters.
- At least one digit.
- At least one uppercase letter.
- At least one lowercase letter.
- At least one special character.
- Consider the following characters as special characters: !@#$%^&*()-+
- Have no repeated characters in the conjunct.

> **_Note:_**  Don't consider white spaces as valid characters.

Exemplo:  

```c#
IsValid("") // false  
IsValid("aa") // false  
IsValid("ab") // false  
IsValid("AAAbbbCc") // false  
IsValid("AbTp9!foo") // false  
IsValid("AbTp9!foA") // false
IsValid("AbTp9 fok") // false
IsValid("AbTp9!fok") // true
```



## Problem


Build an application that exposes a web API that validates if a password is valid.

Input: A password (string).  
Output: A boolean that's indicate if that password is valid

## Concepts
  - Design Patterns
  - Clean Code
  - Clean Architecture
  - TDD
  - Mock or Fake


## Documentation
  URL: `http://localhost:3000/password`<br>
  Method: POST<br>  
  Payload Example: 
  ```
  {
	  "password": "AbTp9!fok"
  }
  ```
  
  
