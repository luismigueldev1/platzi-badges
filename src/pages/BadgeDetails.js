import React from 'react'
import { Link } from 'react-router-dom'



import '../styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal';

export default function BadgeDetails(props) {
    const data = props.badge
    return (
        <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col BadgeDetails__hero-attendant-name">
                            <h1>{data.firstName} {data.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Badge
                            name={data.firstName}
                            lastName={data.lastName}
                            email={data.email}
                            twitter={data.twitter}
                            jobTitle={data.jobTitle}
                            avatar={data.avatarUrl}
                        />
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center ">
                        <h2 className="text-center">Actions</h2>
                        <div className="mt-2">
                            <Link className="btn btn-success btn-block" to={`/badges/${data.id}/edit`}>Edit</Link>
                        </div>
                        <div className="mt-2">
                            <button  onClick={props.onOpenModal} className="btn btn-danger btn-block">Delete</button>
                            <DeleteBadgeModal 
                            onClose={props.onCloseModal} 
                            isOpen={props.modalIsOpen}
                            onDeleteBadge={props.onDeleteBadge}
                            />
                           
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
