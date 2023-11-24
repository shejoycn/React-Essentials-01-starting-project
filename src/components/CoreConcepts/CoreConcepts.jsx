import { CORE_CONCEPTS } from '../../data'
import CoreConcept from '../CoreConcept/CoreConcept'
import Section from '../Section/Section'

export default function CoreConcepts(){
    return(
        <Section id="core-concepts" title="Core Concenpts">
          
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} key={conceptItem.title} />)}
          </ul>
       </Section>
    )
}