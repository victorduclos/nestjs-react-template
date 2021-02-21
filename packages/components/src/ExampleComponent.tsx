import * as React from 'react'
import styles from './styles.module.css'
import {example} from "@victor/business-logic";

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  const test = example();
  return <div className={styles.test}>Oui, ceci est un test: {text} {test}</div>
}
