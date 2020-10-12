import React from 'react';

const style = {
    div: {
        width: 'fit-content',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    a: {
        padding: '0 10px',
    }
}

const Contacts = ({ contacts }) => {
    return (
        <div style={style.div}>
            {contacts.map(contact => <a style={style.a} key={contact.id} href={contact.url}>{contact.label}</a>)}
        </div>
    )
}

export default Contacts;