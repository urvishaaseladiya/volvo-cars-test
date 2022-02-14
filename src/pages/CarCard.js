import React from 'react';
import { Card, CardContent, Text, Grid, Row, Col, Icon } from 'vcc-ui';
import { Link } from "react-router-dom";

export const CarCard = (props) => {
    return (
        <Card style={{ margin: '1.5rem'}}>
            <CardContent>
                <Text variant="bates" className="text-muted">{props.car.bodyType}</Text>
                <Text>{props.car.modelName}</Text>
                <Text variant="bates" className="text-muted">{props.car.modelType}</Text>
                <img src={props.car.imageUrl} className="card-img-top img-fluid" alt="..." />
                <div style={{ marginTop: '1em' }} >
                    <Link to={'learn/' + props.car.id} className="m-2">Learn<Icon type="navigation-chevronforward-24" color="action" /></Link>
                    <Link to={'shop/' + props.car.id} className="m-2" >Shop<Icon type="navigation-chevronforward-24" color="action" /></Link>
                </div>
            </CardContent>

        </Card>
    )
}