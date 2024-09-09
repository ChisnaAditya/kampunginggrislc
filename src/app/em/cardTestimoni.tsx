import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function CardTestimoni(props: any) {
  return (
    <Card className="mx-auto max-w-md hover:scale-105">
      <CardHeader className="flex gap-4">
        <Avatar isBordered radius="full" size="lg" src={props.avatar} />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="font-semibold leading-none text-default-600">
            {props.nama}
          </h4>
          <h5 className="tracking-tight text-default-600 text-xs">
            {props.job}
          </h5>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2 text-small text-default-500">
        <p>{props.testimoni}</p>
      </CardBody>
    </Card>
  );
}
