---
title: Species Specific
permalink: raising_butterflies_301/
eleventyExcludeFromCollections: [ "species" ]
eleventyNavigation:
  key: Species Specific
  parent: Home
---


## Species Specific

<p><span class="full-image-float-right ssNonEditable"><span><img style="width: 275px;" src="{{ global.imagesUrl }}/storage/minori_collage.jpg" alt="" /></span></span></p>
<p>The objective&nbsp;of this section&nbsp;is to provide&nbsp;single-page worksheets for&nbsp;specific butterflies drilling down&nbsp;to the subspecific level.&nbsp; These worksheets&nbsp;address&nbsp;21 key metrics of rearing butterflies.&nbsp; <a href="../taxa-specific-rearing-criteria/index.html">More.</a>&nbsp;</p>
<p>Many of these&nbsp;21 criteria link back to the butterfly rearing <strong style="font-weight: 400;"><a href="../raising-techniques/index.html">techniques and setups</a></strong>&nbsp;database for more instructions, illustrations, videos, and elaboration.</p>
<p>&nbsp;</p>

<ul>
{%- for species in collections.species -%}
  <li><a href="{{ species.url }}"><em>{{ species.data.title }}</em></a></li>
{%- endfor -%}
</ul>
