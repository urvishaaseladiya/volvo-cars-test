import React, { useState, useEffect } from "react";
import {SelectInput} from 'vcc-ui';

export const Header = (props) => {
    
    return (
        <div className="search-div">
        <SelectInput value={props.value} onChange={props.setValue} label="Filter By Body Type">
            <option value="all">All</option>
            <option value="suv">SUV</option>
            <option value="estate">Estate</option>
            <option value="sedan">Sedan</option>
        </SelectInput>
        </div>
    );
}