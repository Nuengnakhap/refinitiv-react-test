import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container my-4">
      <h3 className="text-center">Refinitiv React Test</h3>
      <List component="nav" className="shadow">
        <Link href="/question/1" passHref>
          <ListItem component="a" button>
            <ListItemText primary="Question 1" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/question/2" passHref>
          <ListItem component="a" button>
            <ListItemText primary="Question 2" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
