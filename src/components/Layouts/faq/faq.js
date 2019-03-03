import React, { Component } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";
const styles = {
  root: {
    margin: 30,
    padding: 20
  },
  row: {
    fontWeight: "bold",
    backgroundColor: "#F5F5F5"
  }
};

class Faq extends Component {
  state = {
    faqlist: [
      {
        id: 1,
        question: "What if I have no experience with selling beats?",
        answer:
          "Great - we’ve got you covered. This masterclass shows you everything from scratch. We’ll start at the fundamentals, moving up to the advanced techniques. You’ll make an incredible jump-start compared to others that are just starting out."
      },
      {
        id: 2,
        question:
          "I’m already selling some beats, is this masterclass right for me?",
        answer:
          "Even better! This masterclass will help you accelerate your growth, which is even more effective when you already have a ground base of knowledge and experience with selling beats."
      },
      {
        id: 3,
        question: "How long do I get access for?",
        answer:
          "There is no time limit, and no monthly/yearly fee to keep access. Log in whenever you like and the masterclass will be there for you!"
      },
      {
        id: 4,
        question: "What is your refund policy?",
        answer:
          "We want you to make the right decision. That is why we offer a 14-day refund policy."
      },
      {
        id: 5,
        question: "I have a different question",
        answer:
          "You can use the Help Widget on the bottom right of the screen, or send an email to support@urbanmasterclass.com and we’ll get back to you ASAP.            "
      }
    ]
  };
  render() {
    return (
      <Paper style={styles.root}>
        {this.state.faqlist.map(faq => (
          <Table style={styles.table} key={faq.id}>
            <TableHead>
              <TableRow style={styles.row}>
                Q{faq.id}. {faq.question}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>{faq.answer}</TableRow>
            </TableBody>
          </Table>
        ))}
      </Paper>
    );
  }
}

export default Faq;
