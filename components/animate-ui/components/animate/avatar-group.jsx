import * as React from "react";
import * as motion from "motion/react-client";

import {
  AvatarGroup as AvatarGroupPrimitive,
  AvatarGroupTooltip as AvatarGroupTooltipPrimitive,
  AvatarGroupTooltipArrow as AvatarGroupTooltipArrowPrimitive,
} from "@/components/animate-ui/primitives/animate/avatar-group";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------
   Avatar (single avatar)
------------------------------------------------------ */

export function Avatar({ className, ...props }) {
  return (
    <span
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }) {
  return (
    <img
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, ...props }) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

/* ------------------------------------------------------
   Avatar Group
------------------------------------------------------ */

export function AvatarGroup({
  className,
  invertOverlap = true,
  ...props
}) {
  return (
    <AvatarGroupPrimitive
      className={cn("h-12 -space-x-3", className)}
      invertOverlap={invertOverlap}
      {...props}
    />
  );
}

/* ------------------------------------------------------
   Avatar Tooltip
------------------------------------------------------ */

export function AvatarGroupTooltip({
  className,
  children,
  layout = "preserve-aspect",
  ...props
}) {
  return (
    <AvatarGroupTooltipPrimitive
      className={cn(
        "bg-primary text-primary-foreground z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
        className
      )}
      {...props}
    >
      <motion.div layout={layout} className="overflow-hidden">
        {children}
      </motion.div>

      <AvatarGroupTooltipArrowPrimitive
        className="fill-primary size-3 data-[side='bottom']:translate-y-[1px] data-[side='right']:translate-x-[1px] data-[side='left']:translate-x-[-1px] data-[side='top']:translate-y-[-1px]"
        tipRadius={2}
      />
    </AvatarGroupTooltipPrimitive>
  );
}
