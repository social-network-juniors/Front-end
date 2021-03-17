import React, {useState, Fragment} from "react";

import {Collapse, ListItemIcon, ListItemText, List, ListSubheader} from "@material-ui/core";
import SidemenuItem from "./SidemenuItem";

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

/* SidemenuCollapse ::
 * Does the same as `SidemenuItem` but adds collapsable submenu section. */

const SidemenuCollapse = ({initState, icon, label, subheader, children}) => {
	const [open, setOpen] = useState(initState);

	const handleToggle = () => setOpen(!open);

	const _subheader = subheader ?
		<ListSubheader component="div">
			{subheader}
		</ListSubheader>
		: null;

	return (
		<Fragment>
			<SidemenuItem onClick={handleToggle} button>
				{icon &&
					<ListItemIcon>
						{icon}
					</ListItemIcon>}
				<ListItemText primary={label} />
				{open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
			</SidemenuItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" className="Sidemenu-NestedList" subheader={_subheader} disablePadding>
					{children}
				</List>
			</Collapse>
		</Fragment>
	);
}

export default SidemenuCollapse;