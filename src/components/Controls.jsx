import React from "react"
import { useState, useEffect } from "react"
import { Search } from "./Search"

export const Controls = () => {
	const [search, serSearch] = useState('')

	return (
		<div>
			<Search search={search} serSearch={serSearch}/>
		</div>
	)
}