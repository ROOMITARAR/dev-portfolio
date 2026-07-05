import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social, studioCapabilities, studioPrinciples } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: "What We Do",
      display: true,
      items: [],
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: "How We Work",
      display: true,
      items: [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Row minWidth="160" horizontal="center" vertical="center" paddingBottom="s">
              <img
                src={person.avatar}
                alt="Devthon Labs Logo"
                style={{
                  width: "128px",
                  height: "128px",
                  objectFit: "contain",
                }}
              />
            </Row>
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column fillWidth gap="m" marginBottom="xl">
              <Text variant="body-default-l" onBackground="neutral-weak">
                {about.intro.description}
              </Text>
            </Column>
          )}

          {/* Section: What We Do */}
          <Heading as="h2" id="What We Do" variant="display-strong-s" marginBottom="m">
            What We Do
          </Heading>
          <Row fillWidth gap="l" marginBottom="xl" s={{ direction: "column" }}>
            {studioCapabilities.map((capability, index) => (
              <Column
                key={index}
                flex={1}
                padding="l"
                radius="l"
                border="neutral-alpha-medium"
                background="neutral-alpha-weak"
                gap="m"
              >
                <Heading variant="heading-strong-m">{capability.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {capability.description}
                </Text>
              </Column>
            ))}
          </Row>

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="xl">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Section: How We Work */}
          <Heading as="h2" id="How We Work" variant="display-strong-s" marginBottom="m">
            How We Work
          </Heading>
          <Column fillWidth gap="m" marginBottom="l">
            <Row gap="l" s={{ direction: "column" }}>
              {studioPrinciples.slice(0, 2).map((principle, index) => (
                <Column key={index} flex={1} padding="m" gap="s">
                  <Heading variant="heading-strong-s" onBackground="brand-strong">
                    {principle.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {principle.description}
                  </Text>
                </Column>
              ))}
            </Row>
            <Row gap="l" s={{ direction: "column" }}>
              {studioPrinciples.slice(2, 4).map((principle, index) => (
                <Column key={index} flex={1} padding="m" gap="s">
                  <Heading variant="heading-strong-s" onBackground="brand-strong">
                    {principle.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {principle.description}
                  </Text>
                </Column>
              ))}
            </Row>
          </Column>
        </Column>
      </Row>
    </Column>
  );
}