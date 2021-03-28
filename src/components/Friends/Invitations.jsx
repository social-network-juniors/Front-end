import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
export default function Invitations(props) {
    const invitesData = props.invites;
    const invites = invitesData.map((invite) =>
        <div>
            <div>{invite.name + ' ' + invite.lastName}</div>
            <DoneIcon />
            <CloseIcon />
        </div>
    )

    return (

        // Boolean(invitesData.length) ? invites : <div>У вас пока нет заявок</div>
        invitesData.length ? invites : <div>У вас пока нет заявок</div>
    )
}
