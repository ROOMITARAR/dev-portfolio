import { Column, Row, Heading, Text, Icon, RevealFx } from "@once-ui-system/core";

export function Services() {
  return (
    <Column fillWidth gap="l" paddingX="l" marginBottom="40">
      <RevealFx translateY="12" fillWidth>
        <Column fillWidth gap="xs" marginBottom="m">
          <Heading as="h2" variant="display-strong-s">
            Our Services
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Tailored development solutions to bring your ideas to life or establish a high-quality web presence for your local business.
          </Text>
        </Column>
      </RevealFx>

      <Row fillWidth gap="l" s={{ direction: "column" }}>
        {/* Tier 1: Custom Web App Development */}
        <Column
          flex={1}
          padding="l"
          radius="l"
          border="neutral-alpha-medium"
          background="neutral-alpha-weak"
          gap="m"
          style={{ transition: "all 0.3s ease" }}
        >
          <Row gap="12" vertical="center">
            <Icon name="rocket" onBackground="brand-strong" size="m" />
            <Heading variant="heading-strong-l">Custom Web Applications</Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Production-grade software engineered for teams and startups needing robust, highly scalable applications.
          </Text>
          <Column gap="12" marginTop="s">
            <Row gap="8" vertical="start">
              <Icon name="arrowRight" size="xs" onBackground="brand-weak" style={{ marginTop: "2px" }} />
              <Text variant="body-default-s">React, Angular, and Node.js custom production stacks</Text>
            </Row>
            <Row gap="8" vertical="start">
              <Icon name="arrowRight" size="xs" onBackground="brand-weak" style={{ marginTop: "2px" }} />
              <Text variant="body-default-s">API integrations and intelligent AI Agent workflows</Text>
            </Row>
            <Row gap="8" vertical="start">
              <Icon name="arrowRight" size="xs" onBackground="brand-weak" style={{ marginTop: "2px" }} />
              <Text variant="body-default-s">Bubble.io custom plugin and workflow development</Text>
            </Row>
          </Column>
          <Row marginTop="l" vertical="center">
            <Text variant="heading-strong-m" onBackground="brand-strong">Enterprise Ready Stacks</Text>
          </Row>
        </Column>

        {/* Tier 2: Local Business Websites */}
        <Column
          flex={1}
          padding="l"
          radius="l"
          border="neutral-alpha-medium"
          background="neutral-alpha-weak"
          gap="m"
          style={{ transition: "all 0.3s ease" }}
        >
          <Row gap="12" vertical="center">
            <Icon name="globe" onBackground="brand-strong" size="m" />
            <Heading variant="heading-strong-l">Local Business Websites</Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Simple, fast websites for barbershops, salons, florists, wedding vendors, and trades with strong reviews but no web presence.
          </Text>
          <Column gap="12" marginTop="s">
            <Row gap="8" vertical="start">
              <Icon name="arrowRight" size="xs" onBackground="brand-weak" style={{ marginTop: "2px" }} />
              <Text variant="body-default-s"><strong>Starter Site ($200 - $400)</strong>: Single page layout, hours/location, contact details, photo gallery, Google Maps &amp; reviews integration.</Text>
            </Row>
            <Row gap="8" vertical="start">
              <Icon name="arrowRight" size="xs" onBackground="brand-weak" style={{ marginTop: "2px" }} />
              <Text variant="body-default-s"><strong>Full Site ($600 - $1,000)</strong>: Multi-page layout, service breakdown, booking/inquiry forms, built for search visibility.</Text>
            </Row>
          </Column>
          <Row marginTop="l" vertical="center">
            <Text variant="heading-strong-m" onBackground="brand-strong">Demo-First: See the site before deciding</Text>
          </Row>
        </Column>
      </Row>
    </Column>
  );
}
