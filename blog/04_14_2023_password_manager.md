# Writing a Password Manager Using Java

Java Swing GUI actually not that bad :)

## Features

- Password Judgement
- Password Encryption using master password
- Generating secure passwords

## How does the encryption work

The encryption works with 2 keys derived from the master password. Those keys are sha256(master password) and sha256(sha256(master password)) and they are called secure key and less secure key. But why are there 2 keys? Since i use xor to encrypt i did use 2 keys that if the key for the username's, which are guessable, get's reversed then the attacker only has a key to decrypt the other usernames but not the passwords for them. But how do i use a sha256 hash to xor encrypt? That's pretty simple. Depending on the variable the current char gets xored with x bytes from the key. The actual calculation for which byte in the key to use is `(str_index + key_index * xors) % key.length`.

## How do i judge passwords

I judge passwords using a score based system. The following factors influence the score:

- length (+1 or + 2)
- lowercase letters (+1)
- uppercase letters (+1)
- numbers (+1)
- special characters (+1)
- password is in rockyou password list (-1000)
- password is found in the haveibeenpwnd api (-1000)

The password is judged as strong if the score is bigger then 5 and medium if the password is bigger then 2 and what da hail change your password idiot if the score is negative.

## How do i generate a random password

Random passwords get generated using the Java SecureRandom class. It chooses a random char from a list.

## How does the user get his passwords

If the user clicks on a username the password get's copied to the clipboard

## Total Development time

~ 4 hours

## The final result

![password home](/blog/password_main.png)
![password good](/blog/password_good.png)
![password bad](/blog/password_bad.png)