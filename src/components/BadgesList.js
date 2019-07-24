import React, { Component } from 'react'

export default class BadgesList extends Component {
    render() {

        const { badges } =  this.props

        if(badges.length === 0){
            return(
                <h2>No Badges found</h2>
            )
        }

        return (
            <ul className="list-unstyled">
                {badges.map(badge => {
                    return (
                        <li key={badge.id}>
                            <div className="container shadow-sm mb-4 badge_card_container">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center justify-content-center ">
                                        <img className="badge_img"src={badge.avatarUrl} alt=""/>
                                    </div>
                                    <div className="col">
                                        <h5><strong> {badge.firstName} {badge.lastName}</strong> </h5>
                                        <h6 className="font-weight-light">Twitter: {badge.twitter}</h6>
                                        <h6 className="font-weight-light">{badge.jobTitle}</h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )

                })}
            </ul>
        )
    }
}