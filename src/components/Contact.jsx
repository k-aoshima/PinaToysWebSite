import React from 'react'

const Contact = () => {
  return (
    <body>
        <div class='contact'>
            <h1 class='contact-ttl'>Contact</h1>
            <form action=''>
                <th class='contact-item'>Name</th>
                <td class='contact-body'>
                    <input type='text' name='Name' class='form-text' />
                </td>
                <th class='contact-item'>E-mail</th>
                <td class='contact-body'>
                    <input type='text' name='Name' class='form-text' />
                </td>
                <th class='contact-item'>Title</th>
                <td class='contact-body'>
                    <input type='text' name='Name' class='form-text' />
                </td>
                <th class='contact-item'>Comment</th>
                <td class='contact-body'>
                    <textarea name='Name' class='form-textarea'></textarea>
                </td>
                <input class='contact-submit' type='submit' value='Submit'></input>
            </form>
        </div>
    </body>

  )
}

export default Contact