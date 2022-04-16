import React, { Component } from 'react';

const LimbSegment = ({ limbClass, atlas, limbId }) => {
    return (
        <div 
            className={limbClass
            + " " + atlas} 
            id={limbId}
        >
        </div>
    );
}


// <div className={'vs_crotch ' + male_clothes[this.state.current_pants]['atlas']} id={male_clothes[this.state.current_pants]['id'] + '_crotch'}></div>

//<div className={'vs_backleg_foot ' + male_clothes[this.state.current_pants]['atlas']} id={male_clothes[this.state.current_pants]['id'] + '_backleg_foot'}></div>

//<div className={'vs_backarm_lowerhalf ' + male_clothes[this.state.current_shirt]['atlas']} id={male_clothes[this.state.current_shirt]['id'] + '_backarm_lowerhalf'}></div>

//<div className={'vs_backhem ' + male_clothes[this.state.current_shirt]['atlas']} id={male_clothes[this.state.current_shirt]['id'] + '_back_hem'}></div>

// 
//                         					<div className={'vs_hat ' 
// 				                                + male_hats[this.state.current_hat]['atlas']} 
// 				                                id={'vs_hat' + male_hats[this.state.current_hat]['id']}>
// 				                        


export default LimbSegment;