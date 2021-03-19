import React from "react";

import {ListItem} from "@material-ui/core";
import {useRouteMatch, useHistory} from "react-router-dom";

/* SidemenuItem ::
 * Simply handles route changing and trigger `active` class in `ListItem` component. */

const SidemenuItem = (props) => {
	const {path} = props;

	const match = useRouteMatch(path ?? "");
	const history = useHistory();

	const liProps = {...props};
	delete liProps.path;

	const className = liProps.className ? liProps.className.split(" ") : [];
	match && path && className.push("Sidemenu-Active");
	liProps.className = className.join(" ");
	
	liProps.onClick = e => {
		!match && path &&
			history.push(path);	
		props.onClick && props.onClick(e);
	};

	return <ListItem {...liProps}/>;
};

export default SidemenuItem;