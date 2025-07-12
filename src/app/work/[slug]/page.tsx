import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, AvatarGroup, Button, Column, Flex, Heading, Media, Text, Carousel } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "work", "projects"])
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="m" horizontal="center" gap="l">
        <Column maxWidth="xs" gap="16">
          <Button data-border="rounded" href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
            Projects
          </Button>
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
        </Column>
      </Column>
      
      {post.metadata.images.length > 0 && (
        <Column fillWidth>
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            items={post.metadata.images.map((media, index) => {
              const isVideo = media.endsWith('.mp4') || media.endsWith('.webm');
              return {
                slide: isVideo ? (
                  <video
                    key={`video-${index}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-m)' }}
                  >
                    <source src={media} type="video/mp4" />
                    {post.metadata.title}
                  </video>
                ) : media,
                alt: post.metadata.title,
              };
            })}
          />
        </Column>
      )}
      
      <Column maxWidth="m" horizontal="center" gap="l">
        <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
          <Flex gap="12" marginBottom="24" vertical="center">
            {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
          </Flex>
          <CustomMDX source={post.content} />
        </Column>
      </Column>
      
      {/* PDF Document Section */}
      {(post.slug === 'rde_veritest' || post.metadata.images.some(media => media.endsWith('.pdf'))) && (
        <Column fillWidth gap="m" paddingY="xl">
          <Column maxWidth="xs" horizontal="center" gap="16">
            <Heading variant="display-strong-s" align="center">
              Technical Documentation
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
              View the complete technical report and project documentation
            </Text>
          </Column>
          <Column 
            fillWidth 
            style={{
              background: 'var(--surface-background)',
              border: '1px solid var(--neutral-alpha-weak)',
              borderRadius: 'var(--radius-l)',
              overflow: 'hidden',
            }}
          >
            {post.slug === 'rde_veritest' ? (
              <iframe
                key="rde-pdf"
                src="/images/projects/rde_veritest/HUD_For_Vehicle_Test_B721275_Final_Year_Project.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH&pagemode=none"
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  display: 'block',
                }}
                title={`${post.metadata.title} - Technical Documentation`}
              />
            ) : (
              post.metadata.images.filter(media => media.endsWith('.pdf')).map((pdf, index) => (
                <iframe
                  key={`pdf-${index}`}
                  src={`${pdf}#toolbar=1&navpanes=0&scrollbar=1&view=FitH&pagemode=none`}
                  style={{
                    width: '100%',
                    height: '800px',
                    border: 'none',
                    display: 'block',
                  }}
                  title={`${post.metadata.title} - Technical Documentation`}
                />
              ))
            )}
          </Column>
        </Column>
      )}
      
      <ScrollToHash />
    </Column>
  );
}
