import Link from "next/link";

export default function NotFound() {

	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not request resource</p>
			<p>Could not request Teeests</p>
			<Link href="/">Return Home</Link> 
		</div>
	)
}