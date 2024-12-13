import Link from "next/link"

export function MobileNavItem(props:any) {
  return (
    <Link  href={props.href}>
      {props.label}
    </Link>
  )
}
