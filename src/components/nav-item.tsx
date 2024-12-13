import Link from "next/link";

export default function NavItem(props:any) {
  return (
    <Link href={props.href}>
        {props.label}
    </Link>
  )
}
