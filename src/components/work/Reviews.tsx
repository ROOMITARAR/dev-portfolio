import { Column, Heading, Row, Text } from "@once-ui-system/core";

interface Review {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const reviewsData: Review[] = [
  {
    name: "Dr. Faisal",
    role: "Director, HMS System",
    comment: "Devthon Labs delivered a blazing fast booking and scheduling system that eliminated our phone queue. Patients love the simplicity, and we love the zero-maintenance reliability.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Founder, Nola Bloom",
    comment: "They built our business site in less than a week. The site loads instantly, and we've seen a noticeable increase in customer inquiries. Highly recommend their demo-first approach.",
    rating: 5,
  },
  {
    name: "M. Ahmed",
    role: "Product Owner, Commonsight",
    comment: "Excellent engineering. They diagnosed our database issues, integrated the APIs cleanly, and shipped a highly responsive dashboard. Working directly with Abdul made the process smooth.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <Column fillWidth gap="m" paddingX="l" marginBottom="l">
      <Heading as="h2" variant="display-strong-xs" marginBottom="s">
        What Our Clients Say
      </Heading>
      <Row fillWidth gap="l" s={{ direction: "column" }}>
        {reviewsData.map((review, index) => (
          <Column
            key={index}
            flex={1}
            padding="l"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            gap="m"
          >
            <Row gap="4">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "#00c8f0" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </Row>
            <Text variant="body-default-m" onBackground="neutral-strong">
              "{review.comment}"
            </Text>
            <Column gap="2">
              <Text variant="heading-strong-s" onBackground="neutral-strong">
                {review.name}
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {review.role}
              </Text>
            </Column>
          </Column>
        ))}
      </Row>
    </Column>
  );
}
