import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './InfoBox.css'
function InfoBox({total, cases, active, isRed, title, ...props}) {
    return (
        <div>
            <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
                <CardContent>
                    {/*Title*/}
                    <Typography className="infoBox__title" color='textSecondary'>
                        {title}
                    </Typography>
                    {/*Cases*/}
                    <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
                    {/*Total*/}
                    <Typography className="infoBox__total" color='textSecondary'>
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default InfoBox;