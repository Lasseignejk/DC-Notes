# smtplib and datetime

SMTP -- Simple Mail Transfer Protocol

    import smtplib

[docs](https://docs.python.org/3/library/smtplib.html)

The first thing we do is set up an object using the SMTP class. This represents a connection.

    connection = smtplib.SMTP()

Inside of the parenthesis, you put the smtp address for your email

| Provider | SMTP                |
| -------- | ------------------- |
| Gmail    | smtp.gmail.com      |
| Hotmail  | smtp.live.com       |
| Yahoo    | smtp.mail.yahoo.com |

Next thing is to use `.starttls()`. TLS stands for `Transport Layer Security` and is use to secure the connection to the email servers. Encrypts messages.

Once we've got that, we need to login to the connection.

    connection.login(user=[my email address], password=[password for that account])

Then we can send an email!

    connection.sendmail(from_addr=[my email address], to_addrs=[recipient's email address], msg=[message you want to send])

The last thing we need to do is close the connection.

    connection.close()

If you run the code, it should send the email. If you get an error, it's probably because gmail doesn't just let anyone send emails. You'll have to go in and set up a password just for the app.

The email will probably be sent to spam.... Let's add a subject line to make it less likely to be sent to spam. It goes inside the message parameter.

    connection.sendmail(from_addr=my_email, to_addrs="test@yahoo.com", msg="Subject:Hello\n\nThis is the body of a message.")

So we put `Subject:` and then the subject, then `\n\n` and the actual message we want to send.

Just like opening up files, we can use the `with` keyword so we can skip having to close the connection at the end. Instead of `connection = smtplib.SMTP("smtp.gmail.com")`...

    with smtplib.SMTP("smtp.gmail.com") as connection:

And indent the code below.

## The `datetime` module

    import datetime as dt

To get the current date and time:

    now = dt.datetime.now()

If we print `now`, it'll give us a long string with the current date and time. It's not very easy to use. If we just want the year, we can type `year = now.year`. It'll return the year as an integer.

`now.weekday()` returns an integer corresponding to the day of the week. 0 is Monday, 6 is Sunday.
